var IProductInfo=Object.create(HTMLElement.prototype);
IProductInfo.createdCallBack=function()
{
   var shadow=this.createShadowRoot();
   var para=document.createElement('p');
   para.align=this.getAttributes('alignment');
   para.id=this.getAttributes('identifier');
   para.color=this.getAttributes('color');
   shadow.appendChild(para);
   var bold=document.createElement('b');
   shadow.appendChild(bold);
};
   var IProduct=document.registerElement('i-product',{prototype:IProductInfo});
   
   var IProductInfo=Object.create(HTMLElement.prototype);
   IProductInfo.createdCallBack=function()
   {
      var shadow=this.createShadowRoot();
      var para=document.createElement('p');
      para.align=this.getAttributes('alignment');
      para.id=this.getAttributes('identifier');
      para.color=this.getAttributes('color');
      shadow.appendChild(para);
      var bold=document.createElement('b');
      shadow.appendChild(bold);
   };
      var IProduct=document.registerElement('i-product',{prototype:IProductInfo});
      
         