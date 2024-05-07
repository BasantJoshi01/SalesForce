public with sharing  class Test {
    @AuraEnabled
public static void testing() {
    
    // Encode the binary content as Base64
    // Instantiate a new Http object
    
    String fileId = '069dL000000aYkvQAE';
    
    // Retrieve the content version
    ContentVersion cv = [SELECT VersionData FROM ContentVersion WHERE ContentDocumentId = :fileId LIMIT 1];
    
    
    
    // Get the binary data of the .docx file
    Blob pdfBlob = cv.VersionData;
    String base64String = EncodingUtil.base64Encode(pdfBlob);
    system.debug(base64String);
    Http h = new Http();

       
    // Instantiate a new HTTP request, specify the method (POST) as well as the endpoint....
   
    HttpRequest req = new HttpRequest();
    req.setEndpoint('callout:DocuSign_eSign/restapi/v2.1/accounts/26856070/envelopes');
    req.setMethod('POST'); // Change the method to POST to create a new envelope.
    req.setHeader('Content-Type', 'application/json');
    
    // Define recipient information
    //System.debug(a);
    String recipientEmail ='basantjoshi2828@gmail.com';
    String recipientName = 'Basant Joshi';
    
    // Construct the request body with recipient information and document(s)
    
    String requestBody = '{' +
'  "recipients": {' +
'    "signers": [{' +
'      "email": "' + recipientEmail + '",' +
'      "name": "' + recipientName + '",' +
'      "recipientId": "1",' +
'      "routingOrder": "1"' +
'    }]' +
'  },' +
'  "status": "sent",' +
'  "emailSubject": "Please sign the required docs",' +
'  "documents": [{' +
'      "documentBase64": "' + base64String + '",' +
'      "documentId": "1",' +
'      "name": "UTU Datesheet.pdf"' +
'  }],' +
'  "tabs": {' +
'    "signHereTabs": [{' +
'      "documentId": "1",' +
'      "recipientId": "1",' +
'      "tabLabel": "SignHereTab",' +
'      "pageNumber": "1",' +
'      "xPosition": "100",' +
'      "yPosition": "100"' +
'    }]' +
'  }' +
        //here we need to add event notification
'}';

req.setBody(requestBody);
    System.debug(requestBody);
   
    //req.setBody('{}');
   //req.setBodyAsBlob(Blob.valueOf(requestBody));
    // Send the request, and return a response
    
    HttpResponse res = h.send(req);
    String jsonResponse = res.getBody();
    System.debug(jsonResponse);
    
    // Parse the JSON response and handle accordingly
    // (e.g., check for errors, retrieve envelope ID, etc.)
}
}