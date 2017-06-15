var img; 
var shadow;
class Xproduct extends HTMLElement {
  constructor() 
  {
    // Always call super first in constructor
	  
    super()
    //i=i+1;
    //console.log(i);
    img=document.createElement('img');
    this.imgNode = img;

    // Create a shadow root
    // Create a standard img element and set it's attributes.
  }
  

  connectedCallback()
  {   
	 
	
	  shadow = this.attachShadow({mode: 'open'});
	  debugger;
    img = this.imgNode;
    img.alt = this.getAttribute('data-name');
    img.src = this.getAttribute('data-img');
    img.width=this.getAttribute('width');
    img.height = '150';
    img.className = 'product-img';
    img.id=this.getAttribute('id');
    shadow.appendChild(img);
    // Add an event listener to the image.
    img.addEventListener('click', function(){
      window.location = this.getAttribute('data-url');
    });
   
    //shadow.removeChild(img);
  }
  
  
  static get observedAttributes() 
  {
	  return ['width']; 
  }
  
  attributeChangedCallback(attr, oldValue, newValue) {
	  
   //if (attr == 'width') {
	  
	             	console.log("attribute changed");
	             	this.imgNode.setAttribute(attr,newValue);
    	
       
  }
  disconnectedCallback()
  {
	  console.log("removed attribute");
	 
  }
  adoptedCallback(oldDocument,newDocument)
  {
	  console.log("adopted from the other document");
  }
}
// Deco nnfine the new element
 customElements.define('x-product', Xproduct);