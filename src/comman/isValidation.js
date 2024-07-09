export const isValid = {
   regEmail: /\S+@\S+\.\S+/,
   regexPassword:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
 // regexPassword: /^(?=(.*[A-Z]){2})(?=(.*[a-z]){2})(?=(.*\d){2})(?=(.*[@$!%*?&]){2})[A-Za-z\d@$!%*?&]{8,}$/,
   regName: /^[A-Za-z]{2,50}$/,
   regLastName: /^[A-Za-z]+$/,
   regNumber: /^\d{10}$/
 };
 

 