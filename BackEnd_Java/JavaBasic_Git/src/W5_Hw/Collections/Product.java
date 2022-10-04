package W5_Hw.Collections;

public class Product {
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return Price;
    }

    public void setPrice(double price) {
        Price = price;
    }

    public Product(String name, double price) {
        this.name = name;
        Price = price;
    }

    String name;
    double Price;


}
