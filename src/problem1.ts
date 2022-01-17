const removeElement = (arr: string[], index: number, opposite: string) => {
    const leftIndex = index - 1;
    const rightIndex = index + 1;

    //const matchLeftSide = arr[leftIndex] === opposite;
    const matchRightSide = arr[rightIndex] === opposite;
    
    //if( matchLeftSide ) arr.splice(leftIndex, 1);
    if( matchRightSide ) arr.splice(rightIndex, 1);
    if( matchRightSide ) arr.splice(index, 1);
};

const dirReduceRecursive = (arr: string[], index: number): string[] => { 
    if( index < arr.length ) {

        switch(arr[index]) {
            case "NORTH":
                removeElement(arr, index, "SOUTH");
            break;
            case "SOUTH":
                removeElement(arr, index, "NORTH");
            break;
            case "EAST":
                removeElement(arr, index, "WEST");
            break;
            case "WEST":
                removeElement(arr, index, "EAST");
            break;
        }

        return dirReduceRecursive(arr, index + 1);
    }
    return arr;
};

export function dirReduc(arr: string[]): string[] {
  let i = arr.length;
  let newDirections: string[] = [];
  
  console.log(arr);
  
  while(i--) {
    newDirections = dirReduceRecursive(arr, 0);
  };
  
  return newDirections;
}