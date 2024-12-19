import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 // const token = localStorage.getItem('token');
  let newRequest= req.clone(
    {
      headers: req.headers.set('Authorization', `Bearer ${1234}`)
    }
  );

  console.log(new Date().toISOString()+': '+newRequest);
  return next(newRequest);
};
