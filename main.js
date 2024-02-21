class ProductManager {
    constructor() {
        this.products = [];
    }
    static id = 0

    addProduct(title, description, price, image, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`codigo ${code} ya existe`);
                break;
            }
        }
        const newProduct = {
            title,
            description,
            price,
            image,
            code,
            stock,
        }

        if (!Object.values(newProduct).includes(undefined)) {
            ProductManager.id++
            this.products.push({
                ...newProduct,
                id: ProductManager.id,
            });
        } else {
            console.log("Debe completar todos los campos")
        }

    }

    getProduct() {
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id);
    }

    getProductById(id) {
        !this.existe(id) ? console.log("No existe") : console.log(this.existe(id));
    }
}

const productos = new ProductManager

//Producto agregado
console.log(productos.getProduct())

//Validacion de codigo repetido
productos.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)

//Busqueda por id
productos.getProductById(1);

//Busqueda por id, cuando no existe el id
productos.getProductById(3);

