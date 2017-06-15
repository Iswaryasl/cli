// Create a new object based of the HTMLElement prototype
var IProductInfo = Object.create(HTMLElement.prototype);
var para="";
IProductInfo.createdCallback = function() {
    //Create a shadow root
	var shadow=this.createShadowRoot();
	 para = document.createElement('p');
	    para.innerHTML=this.innerHTML;
	    para.align=this.getAttribute('align');
	  // var n = para.align;
	    debugger;
	    para.id=this.getAttribute('id');
	    
	    para.style.color = "green";
	    para.style.font="italic bold 20px arial,serif";
	    shadow.appendChild(para);   
	    
}

IProductInfo.attributeChangedCallback =function(name,oldValue,newValue)
{
	console.log("attribute changed")
	para.align=newValue;
	console.log(para.align);
	
};
IProductInfo.attachedCallback = function()
{
	console.log("element attached");
};

var XProduct = document.registerElement('i-product', {
    prototype: IProductInfo
});
