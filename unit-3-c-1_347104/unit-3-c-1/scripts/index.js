//store the products array in localstorage as "products"

function product(Type,Description,price,image){
    this.Type = Type;
    this.Description=Description;
    this.price=price;
    this.image=image;

}

let arr =[];

function AddProduct(e){
    e.preventDefault();


    let form=document.getElementById("products");
    let Type=form.Type.value;
    let price=form.price.value;
    let image=form.image.value;
    let Description=form.Description.value;

    let p=new product(type,price,image,Description);
    arr.push(p);

    console.log(arr);

}

