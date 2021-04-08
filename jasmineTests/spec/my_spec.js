describe("findSum", function() {

  it("function findSum exists", function() {
    expect(findSum).not.toThrow();
   });
  
   it("should return 0 ", function() {
     expect(findSum(0)).toEqual(0);
    });

    it("should return 2", function() {
      expect(findSum(1)).toEqual(2);
     });

     it("should return 26", function() {
      expect(findSum(2)).toEqual(26);
     });
  }); 

//####################################################

  describe("prod", function() {
    
    it("function prod exists", function() {
      expect(prod).not.toThrow();
     });

     it("should return 1 ", function() {
      expect(prod(1)).toEqual(0.5);
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

    it("should return [220, 284] if argument is 220 and 300", function() {
      expect(friendlyNum(220, 300)).toEqual([ [ 220, 284 ] ]);
     });
     
     it("function findSumDivNum exists", function() {
      expect(friendlyNum).not.toThrow();
     });
  
     it("should return true if have friendlyArr", function() {
      var friendlyArr = [];
      expect(friendlyArr).toBeDefined();
     });
   });  
 


   
