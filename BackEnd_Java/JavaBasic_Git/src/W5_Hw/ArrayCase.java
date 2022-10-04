package W5_Hw;

public class ArrayCase {

    public static void main(String[] args) {
        int[] arr = {0,1,2,3,4,5,6};
        int num1 = 2, num2 = 9;

        ArrayCase example = new ArrayCase();

        try {
            example.printNum(arr,num1);
            example.printNum(arr,num2);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
    }

    public void printNum(int[] arr, int a) throws MyException {
        if(a<6 && a>-1){
            System.out.println("The number in index "+a+" is "+ arr[a]);
        }else{
            throw new MyException("No index of "+a+" in Array");
        }
    }
}
