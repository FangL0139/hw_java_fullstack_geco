public class ArrClass {
    String[] arrStr ={"String1","String2","String3","String4"};
    long[] arrLong = {123456789L,12345L,9999999L,8888888L};

    public static void main(String[] args) {
        ArrClass arr = new ArrClass();

        for (String str:arr.arrStr) {
            System.out.println(str);
        }

        for (long numLong: arr.arrLong) {
            System.out.println(numLong);
        }
    }
}
