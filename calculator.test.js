//describe() - Test plan
//it() / test() - test case
//expect() - assertion
const {add}= require("./calculator");
const {sub}= require("./calculator");
const {mul}= require("./calculator");
describe("Add feature of the calculator",()=>{
    test("Add 2 positive numbers",()=>{
        expect(add(5,10)).toBe(15);
    });
    it("Add 2 negative numbers",()=>{
        expect(add(-5,-10)).toBe(-15);
    });
});
describe("Sub feature of the calculator",()=>{
    test("Sub 2 positive numbers",()=>{
        expect(sub(5,10)).toBe(-5);
    });
    it("Sub 2 negative numbers",()=>{
        expect(sub(-5,-10)).toBe(5);
    });
});
describe("Mul feature of the calculator",()=>{
    test("Mul 2 positive numbers",()=>{
        expect(mul(5,10)).toBe(50);
        //expect().toEqual()
        //expect().toBeTruthy()
        //expect().toBeFalsy()
        //expect().toBeDefined()
        //expect().toBeUnDefined()
    });
    it("Mul 2 negative numbers",()=>{
        expect(mul(-5,-10)).toBe(50);
    });
});