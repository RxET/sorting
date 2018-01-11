describe('Bubble Sort', function(){

    beforeEach(function (){
        spyOn(window, 'swapFunc').and.callThrough();
    });

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with a single elements', function(){
        expect( bubbleSort([1]) ).toEqual([1]);
    });

    it('handles an array with mutiple elements', function(){
        expect( bubbleSort([3,5,1,4,2])).toEqual([1,2,3,4,5]);
    })

    it("tracks the number of times swapFunc was called", function() {
        // spyOn(window, 'swapFunc');
        expect(swapFunc.calls.count()).toEqual(0);
      });
    
    // beforeAll (function (){ 
    it("calls swapFunk the correct number of times?", function (){
        // spyOn(window, 'swapFunc');
        bubbleSort([3,5,1,4,2]);
        expect(swapFunc.calls.count()).toEqual(6);
        });
    // });

  });
