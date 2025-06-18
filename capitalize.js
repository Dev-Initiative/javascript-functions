function capitalizeStatement(statement) {
  return statement
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeStatement("hello world")); 
