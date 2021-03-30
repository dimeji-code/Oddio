 class Item{
    constructor(id,brand,image,price,tags,isLiked){
        this.id = id;
        this.brand = brand;
        this.image = image;
        this.price = price;
        this.tags = tags;
        this.isLiked = isLiked;

    }

    setItemIsLiked(){
        if(this.isLiked === true){
            this.isLiked = false;
        }else{
            this.isLiked = true;
        }
    }
}
export default Item;