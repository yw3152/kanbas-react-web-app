function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    return (
    <>
    <h4>Find Function</h4>
    const four = {numberArray1.find(a => a === 4)}<br />
    const string3 = {stringArray1.find(a => a === 'string3')}
    </>
    );

}
export default FindFunction;