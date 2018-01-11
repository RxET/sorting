describe('Split Array function', function() {
    it('is able to split an ODD array into two halves', function() {
      expect(split([6,2,1,5,3])).toEqual([[6,2], [1,5,3]]);
    });

    it('is able to split an EVEN array into two halves', function() {
        expect(split([6,2,1,5,3,4])).toEqual([[6,2,1], [5,3,4]]);
    });
  });

  describe('Merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect(merge([2,5,9], [1,3,6])).toEqual([1,2,3,5,6,9]);
    });
  });

  describe('Merge sort function', function(){
    it('is able to recursively call merge and split', function () {
        expect(mergeSort([3,4,1,5,2])).toEqual([1,2,3,4,5]);
    });

    it('returns the array if it only has one value', function () {
        expect(mergeSort([100])).toEqual([100]);
    });
  });

