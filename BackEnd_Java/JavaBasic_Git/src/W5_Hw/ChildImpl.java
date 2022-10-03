package W5_Hw;

public class ChildImpl extends AbsClass1 implements Intr1, Intr2 {


    public static void main(String[] args) {
        String childName = "ChildImpl";

        ChildImpl child = new ChildImpl();
        String absName = child.getName_Abs();
        System.out.println("Abstract Class is "+absName);
        child.printMsg_Abs(childName);
        child.printName_Intr1(childName);
        child.printMsg_Intr1(childName);
        child.printName_Intr2(childName);
        child.printMsg_Intr2(childName);

    }

    @Override
    void printMsg_Abs(String msg) {
        System.out.println(msg + " extends AbsClass.");
    }

    @Override
    public void printName_Intr1(String msg) {
        System.out.println(msg+" implements Intr1.");
    }

    @Override
    public void printMsg_Intr1(String msg) {
        System.out.println(msg+" overrides Intr1 methods.");
    }

    @Override
    public void printName_Intr2(String msg) {
        System.out.println(msg+" implements Intr2.");
    }

    @Override
    public void printMsg_Intr2(String msg) {
        System.out.println(msg+" overrides Intr2 methods.");
    }


}
