class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a,b)=>{
      return a-b
    })
    return args[0]
  }
}