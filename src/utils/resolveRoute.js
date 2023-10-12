const resolveRoute = (route)=>{
  if(route.length <=3){
    const validateRoute = route === '/' ? route : '/:id';
    return validateRoute;
  }
  return `${route}`;
}

export default resolveRoute;