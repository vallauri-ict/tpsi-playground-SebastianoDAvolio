"use strict"

function convBin(){
    var bits=10;
    var powers =[1024,256,128,64,32,16,8,4,2,1];
    var result =[0,0,0,0,0,0,0,0];
    let decNum=document.getElementById("txtN1");
    let n1=parseInt(txtN1.value);
    let txtRis = document.getElementById("txtRis");
    
    let outB="";

    var sum=0;

    if(n1<=1535){
            var i;
        for(i=0;i<bits;i++){
            if(sum+powers[i]<=n1){
                sum=sum+powers[i];
                result[i]=1;
            }else{
                result[i]=0;
            }
        }
        for(i=0;i<bits;i++){
            outB=outB+result[i];
        }
    }else{
        outB="Più di "+bits+" Bit";
    }
    
    txtRis.value=outB;
}

function convDec(){
    var bits=10;
    var powers =[1024,256,128,64,32,16,8,4,2,1];
    let binNum=document.getElementById("txtN2");
    let n1=(txtN2.value);
    let txtRis = document.getElementById("txtRis1");
    
    let outB="";

    var sum=0;
    if(n1.toString().length<=bits){

        var i;
        for(i=0;i<bits;i++){
            if(n1.charAt(i)=='1'){
                sum=sum+powers[i];
            }
        }
        outB=sum;
    }else{
        outB="Più di "+bits+" Bit";
    }

    
    txtRis.value=outB;
}