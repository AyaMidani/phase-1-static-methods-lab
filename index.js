class Formatter {
  static capitalize(stringofword) {
    return stringofword.charAt(0).toUpperCase()+stringofword.slice(1)
}
static sanitize(stringofword){
  return  stringofword.replace(/[^A-Za-z0-9 '-]/g, '');

}
static titleize (stringofword){
  let splitword=stringofword.split(" ")
  let Arrayofstrings=["the","a","an","but","of","and","for","at","by","from"]
  splitword[0]=splitword[0].charAt(0).toUpperCase()+splitword[0].slice(1)
  //console.log(splitword)
  for(let i=1;i<splitword.length;i++)
  {
    for(let j=0;j<Arrayofstrings.length;j++)
    {
      if(!Arrayofstrings.includes(splitword[i]))
      {
        splitword[i]=splitword[i].charAt(0).toUpperCase()+splitword[i].slice(1)
      }
    }
  }
  splitword=splitword.join(" ")
  return splitword
}
}