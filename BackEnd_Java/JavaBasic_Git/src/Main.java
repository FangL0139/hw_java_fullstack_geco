public class Main {
    int num1 = 18;

    public static void main(String[] args) {

//        System.out.println("Hello world!");
        Main main = new Main();
        System.out.println("The num1 is "+main.num1);

        if(main.num1 >10){
            System.out.println("This num1 is bigger than 10!");
        }else {
            System.out.println("This num1 is smaller or equal to 10!");
        }
    }
}