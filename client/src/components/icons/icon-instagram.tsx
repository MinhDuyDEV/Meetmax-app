"use client";

import React from "react";

const IconInstagram = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.00007 4.9C6.44311 4.9 5.90896 5.12125 5.51513 5.51508C5.1213 5.9089 4.90005 6.44305 4.90005 7C4.90005 7.55696 5.1213 8.0911 5.51513 8.48493C5.90896 8.87875 6.44311 9.1 7.00007 9.1C7.55703 9.1 8.09118 8.87875 8.48501 8.48493C8.87884 8.0911 9.10009 7.55696 9.10009 7C9.10009 6.44305 8.87884 5.9089 8.48501 5.51508C8.09118 5.12125 7.55703 4.9 7.00007 4.9ZM7.00007 3.5C7.92834 3.5 8.81859 3.86875 9.47497 4.52513C10.1314 5.1815 10.5001 6.07174 10.5001 7C10.5001 7.92826 10.1314 8.8185 9.47497 9.47488C8.81859 10.1313 7.92834 10.5 7.00007 10.5C6.07181 10.5 5.18156 10.1313 4.52517 9.47488C3.86879 8.8185 3.50004 7.92826 3.50004 7C3.50004 6.07174 3.86879 5.1815 4.52517 4.52513C5.18156 3.86875 6.07181 3.5 7.00007 3.5ZM11.5501 3.325C11.5501 3.55707 11.4579 3.77962 11.2938 3.94372C11.1297 4.10781 10.9072 4.2 10.6751 4.2C10.443 4.2 10.2205 4.10781 10.0564 3.94372C9.89229 3.77962 9.8001 3.55707 9.8001 3.325C9.8001 3.09294 9.89229 2.87038 10.0564 2.70628C10.2205 2.54219 10.443 2.45 10.6751 2.45C10.9072 2.45 11.1297 2.54219 11.2938 2.70628C11.4579 2.87038 11.5501 3.09294 11.5501 3.325ZM7.00007 1.4C5.26826 1.4 4.98545 1.4049 4.17974 1.4406C3.63094 1.4665 3.26273 1.54 2.92113 1.673C2.61733 1.7906 2.39823 1.9313 2.16512 2.1651C1.94603 2.37678 1.77757 2.63521 1.67232 2.9211C1.53932 3.2641 1.46582 3.6316 1.44062 4.1797C1.40421 4.9525 1.40001 5.2227 1.40001 7C1.40001 8.7318 1.40491 9.0146 1.44062 9.8203C1.46652 10.3684 1.54002 10.7373 1.67232 11.0782C1.79132 11.3827 1.93132 11.6018 2.16372 11.8342C2.39963 12.0694 2.61873 12.2101 2.91973 12.3263C3.26553 12.46 3.63374 12.5342 4.17974 12.5594C4.95255 12.5958 5.22275 12.6 7.00007 12.6C8.73189 12.6 9.01469 12.5951 9.8204 12.5594C10.3678 12.5335 10.7367 12.46 11.0783 12.3277C11.3814 12.2094 11.6019 12.0687 11.8343 11.8363C12.0702 11.6004 12.2109 11.3813 12.3271 11.0803C12.4601 10.7352 12.5343 10.3663 12.5595 9.8203C12.5959 9.0475 12.6001 8.7773 12.6001 7C12.6001 5.2682 12.5952 4.9854 12.5595 4.1797C12.5336 3.6323 12.4601 3.2627 12.3271 2.9211C12.2216 2.6355 12.0535 2.37717 11.835 2.1651C11.6234 1.94589 11.365 1.77742 11.079 1.6723C10.736 1.5393 10.3678 1.4658 9.8204 1.4406C9.04759 1.4042 8.77739 1.4 7.00007 1.4ZM7.00007 0C8.90199 0 9.1393 0.00699996 9.8855 0.042C10.631 0.077 11.1385 0.1939 11.5851 0.3675C12.0471 0.5453 12.4363 0.7861 12.8255 1.1746C13.1815 1.52453 13.4569 1.94781 13.6326 2.415C13.8055 2.8609 13.9231 3.3691 13.9581 4.1146C13.991 4.8608 14.0001 5.0981 14.0001 7C14.0001 8.9019 13.9931 9.1392 13.9581 9.8854C13.9231 10.6309 13.8055 11.1384 13.6326 11.585C13.4574 12.0524 13.1819 12.4758 12.8255 12.8254C12.4755 13.1812 12.0522 13.4566 11.5851 13.6325C11.1392 13.8054 10.631 13.923 9.8855 13.958C9.1393 13.9909 8.90199 14 7.00007 14C5.09815 14 4.86085 13.993 4.11464 13.958C3.36914 13.923 2.86163 13.8054 2.41503 13.6325C1.94765 13.4571 1.52428 13.1817 1.17461 12.8254C0.818593 12.4755 0.543158 12.0522 0.367504 11.585C0.193902 11.1391 0.0770008 10.6309 0.0420004 9.8854C0.00910006 9.1392 0 8.9019 0 7C0 5.0981 0.00700003 4.8608 0.0420004 4.1146C0.0770008 3.3684 0.193902 2.8616 0.367504 2.415C0.542671 1.94753 0.818171 1.52412 1.17461 1.1746C1.52439 0.818462 1.94772 0.543011 2.41503 0.3675C2.86163 0.1939 3.36844 0.077 4.11464 0.042C4.86085 0.00909996 5.09815 0 7.00007 0Z"
        fill="white"
      />
      <path
        d="M7.00007 4.9C6.44311 4.9 5.90896 5.12125 5.51513 5.51508C5.1213 5.9089 4.90005 6.44305 4.90005 7C4.90005 7.55696 5.1213 8.0911 5.51513 8.48493C5.90896 8.87875 6.44311 9.1 7.00007 9.1C7.55703 9.1 8.09118 8.87875 8.48501 8.48493C8.87884 8.0911 9.10009 7.55696 9.10009 7C9.10009 6.44305 8.87884 5.9089 8.48501 5.51508C8.09118 5.12125 7.55703 4.9 7.00007 4.9ZM7.00007 3.5C7.92834 3.5 8.81859 3.86875 9.47497 4.52513C10.1314 5.1815 10.5001 6.07174 10.5001 7C10.5001 7.92826 10.1314 8.8185 9.47497 9.47488C8.81859 10.1313 7.92834 10.5 7.00007 10.5C6.07181 10.5 5.18156 10.1313 4.52517 9.47488C3.86879 8.8185 3.50004 7.92826 3.50004 7C3.50004 6.07174 3.86879 5.1815 4.52517 4.52513C5.18156 3.86875 6.07181 3.5 7.00007 3.5ZM11.5501 3.325C11.5501 3.55707 11.4579 3.77962 11.2938 3.94372C11.1297 4.10781 10.9072 4.2 10.6751 4.2C10.443 4.2 10.2205 4.10781 10.0564 3.94372C9.89229 3.77962 9.8001 3.55707 9.8001 3.325C9.8001 3.09294 9.89229 2.87038 10.0564 2.70628C10.2205 2.54219 10.443 2.45 10.6751 2.45C10.9072 2.45 11.1297 2.54219 11.2938 2.70628C11.4579 2.87038 11.5501 3.09294 11.5501 3.325ZM7.00007 1.4C5.26826 1.4 4.98545 1.4049 4.17974 1.4406C3.63094 1.4665 3.26273 1.54 2.92113 1.673C2.61733 1.7906 2.39823 1.9313 2.16512 2.1651C1.94603 2.37678 1.77757 2.63521 1.67232 2.9211C1.53932 3.2641 1.46582 3.6316 1.44062 4.1797C1.40421 4.9525 1.40001 5.2227 1.40001 7C1.40001 8.7318 1.40491 9.0146 1.44062 9.8203C1.46652 10.3684 1.54002 10.7373 1.67232 11.0782C1.79132 11.3827 1.93132 11.6018 2.16372 11.8342C2.39963 12.0694 2.61873 12.2101 2.91973 12.3263C3.26553 12.46 3.63374 12.5342 4.17974 12.5594C4.95255 12.5958 5.22275 12.6 7.00007 12.6C8.73189 12.6 9.01469 12.5951 9.8204 12.5594C10.3678 12.5335 10.7367 12.46 11.0783 12.3277C11.3814 12.2094 11.6019 12.0687 11.8343 11.8363C12.0702 11.6004 12.2109 11.3813 12.3271 11.0803C12.4601 10.7352 12.5343 10.3663 12.5595 9.8203C12.5959 9.0475 12.6001 8.7773 12.6001 7C12.6001 5.2682 12.5952 4.9854 12.5595 4.1797C12.5336 3.6323 12.4601 3.2627 12.3271 2.9211C12.2216 2.6355 12.0535 2.37717 11.835 2.1651C11.6234 1.94589 11.365 1.77742 11.079 1.6723C10.736 1.5393 10.3678 1.4658 9.8204 1.4406C9.04759 1.4042 8.77739 1.4 7.00007 1.4ZM7.00007 0C8.90199 0 9.1393 0.00699996 9.8855 0.042C10.631 0.077 11.1385 0.1939 11.5851 0.3675C12.0471 0.5453 12.4363 0.7861 12.8255 1.1746C13.1815 1.52453 13.4569 1.94781 13.6326 2.415C13.8055 2.8609 13.9231 3.3691 13.9581 4.1146C13.991 4.8608 14.0001 5.0981 14.0001 7C14.0001 8.9019 13.9931 9.1392 13.9581 9.8854C13.9231 10.6309 13.8055 11.1384 13.6326 11.585C13.4574 12.0524 13.1819 12.4758 12.8255 12.8254C12.4755 13.1812 12.0522 13.4566 11.5851 13.6325C11.1392 13.8054 10.631 13.923 9.8855 13.958C9.1393 13.9909 8.90199 14 7.00007 14C5.09815 14 4.86085 13.993 4.11464 13.958C3.36914 13.923 2.86163 13.8054 2.41503 13.6325C1.94765 13.4571 1.52428 13.1817 1.17461 12.8254C0.818593 12.4755 0.543158 12.0522 0.367504 11.585C0.193902 11.1391 0.0770008 10.6309 0.0420004 9.8854C0.00910006 9.1392 0 8.9019 0 7C0 5.0981 0.00700003 4.8608 0.0420004 4.1146C0.0770008 3.3684 0.193902 2.8616 0.367504 2.415C0.542671 1.94753 0.818171 1.52412 1.17461 1.1746C1.52439 0.818462 1.94772 0.543011 2.41503 0.3675C2.86163 0.1939 3.36844 0.077 4.11464 0.042C4.86085 0.00909996 5.09815 0 7.00007 0Z"
        fill="#4E5D78"
      />
    </svg>
  );
};

export default IconInstagram;