function snapCrackle () {
    let maxValue = 0;
    
    let teste = [
        [1,2,3,4,56,7,8,9,10],
        [3,5,7,8,9,4,2,4,7,8],
        [10,15,6,0,8,9,4,2,6,1],
        [3,6,7,8,9,0,1,2,3,4],
        [5,6,7,9,5,3,2,3,5,1],
        ];

    for (i = 1; i <= teste.length; i++) {
        if (i = 2 && (i % 2) == 0);
        console.log ("Snap");
        if (i = 1 && (i % 5) == 0);
        console.log ("Crackle");
        if ((i = 2 && (i % 2) == 0) && (i = 1 && (i % 5) == 0));
        console.log ("SnapCrackle");
    }
    console.log (snapCrackle(teste));
}