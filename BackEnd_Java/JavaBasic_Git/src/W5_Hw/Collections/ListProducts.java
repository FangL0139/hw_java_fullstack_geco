package W5_Hw.Collections;

import java.util.ArrayList;
import java.util.Collections;

public class ListProducts {
//    ArrayList<Product> products;

    public static void main(String[] args) {

        Product milk = new Product("Milk",3.5 );
        Product cheese = new Product("Cheese", 9.5);
        Product wine = new Product("Wine", 80.4);
        Product lamb = new Product("lamb", 32.2);

        ArrayList<Product> products = new ArrayList<>();

        products.add(wine);
        products.add(cheese);
        products.add(milk);
        products.add(lamb);

        System.out.println("products before sorting~~~~~~~~~~~~~``");
        printProducts(products);
        Collections.sort(products,new PriceComparator());
        System.out.println("products after sorting~~~~~~~~~~~~~``");
        printProducts(products);
    }

    public static void printProducts(ArrayList<Product> products){
        for (Product p:products) {
            System.out.println("Name: "+p.getName()+", Price: "+p.getPrice());
        }
    }
}
