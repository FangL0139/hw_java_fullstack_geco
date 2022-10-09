package hw.weekly.spring_wk5.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MathRequest {
    float num1;
    float num2;
    MathOp op;
    public enum MathOp{ADD, SUB, MUL, DIV}

}
