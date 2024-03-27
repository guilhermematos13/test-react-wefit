import { Icon } from "../interface";

export const SearchIcon = ({ color }: Icon) => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.9 18.9751L10.325 12.4001C9.825 12.8334 9.24201 13.1709 8.57603 13.4126C7.91004 13.6543 7.20137 13.7751 6.45 13.7751C4.6473 13.7751 3.12163 13.1501 1.87298 11.9001C0.624325 10.6501 0 9.14176 0 7.3751C0 5.60843 0.625 4.1001 1.875 2.8501C3.125 1.6001 4.6375 0.975098 6.4125 0.975098C8.1875 0.975098 9.69583 1.6001 10.9375 2.8501C12.1792 4.1001 12.8 5.60968 12.8 7.37885C12.8 8.09301 12.6833 8.78343 12.45 9.4501C12.2167 10.1168 11.8667 10.7418 11.4 11.3251L18 17.8751L16.9 18.9751ZM6.425 12.2751C7.77917 12.2751 8.93021 11.7959 9.87813 10.8376C10.826 9.87926 11.3 8.7251 11.3 7.3751C11.3 6.0251 10.826 4.87093 9.87813 3.9126C8.93021 2.95426 7.77917 2.4751 6.425 2.4751C5.05695 2.4751 3.8941 2.95426 2.93645 3.9126C1.97882 4.87093 1.5 6.0251 1.5 7.3751C1.5 8.7251 1.97882 9.87926 2.93645 10.8376C3.8941 11.7959 5.05695 12.2751 6.425 12.2751Z"
      fill={color}
    />
  </svg>
);
