package W5_Hw;

public class MyException extends Exception{
    MyException(String msg){
        super(msg);
        System.err.println("From MyException in array:  " +msg);
    }
}
