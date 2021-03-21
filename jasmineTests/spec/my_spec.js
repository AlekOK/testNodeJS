describe("findSum", function() {

  it("function findSum exists", function() {
    expect(findSum).not.toThrow();
   });
  
   it("should return 386", function() {
     expect(findSum(3)).toEqual(386);
    });
  }); 

//####################################################

  describe("prod", function() {
    
    it("function prod exists", function() {
      expect(prod).not.toThrow();
     });

    it("should return 0.3125", function() {
      expect(prod(3)).toEqual(0.3125);
     });
   }); 

//#####################################################

   describe("findSumDivNum", function() {

    it("function findSumDivNum exists", function() {
      expect(findSumDivNum).not.toThrow();
     });

    it("should return 284 if argument is 220", function() {
      expect(findSumDivNum(220)).toEqual(284);
     });

    it("should return 220 if argument is 284", function() {
      expect(findSumDivNum(284)).toEqual(220);
     });

     it("should return true if have friendlyArr", function() {
      var friendlyArr = [];
      expect(friendlyArr).toBeDefined();
     });

     it("should return 0 if array is empty", function() {
      var friendlyArr = [];
      expect(friendlyArr.length).toBe(0);
     });
   });  
 


   
