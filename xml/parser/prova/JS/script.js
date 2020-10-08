window.onload = function(){
    let xmlDoc= parseXMLfile(readXMLfile("XML/data.xml"));
    let Nodes= xmlDoc.documentElement.getElementsByTagName(qualifiedName:"compositore");

};

function readXMLfile(URI){
    try{
        let xmlHTTPReq= new XMLHttpRequest();
        xmlHTTPReq.open("GET",URI,false);
        xmlHTTPReq.send();

        return xmlHTTPReq.responseText.replace(/>\s+</g,"><");
    }catch(error){
        console.log(error);
    }
}
function parseXMLfile(txtXML){
    try{
        let objParser= new DOMParser();
        return objParser.parseFromString(txtXML,type:"text/xml");
    }catch(error){
       console.log(error);
    }
}
function createTable(Nodes){
    try{
        document.body.innerHTML="<table><tr></tr></table>";
        for (let obj of Nodes[0].childNodes){
            let td= document.createElement(tagName:"td");
            td.innerText=obj.nodeName.replace(searchValue"_",replaceValue:" ");
            document.getElementsByName(qualfiedName:"tr")[0].appendChild(td);
        }
    }catch(error){
        console.log(error);
    }
}