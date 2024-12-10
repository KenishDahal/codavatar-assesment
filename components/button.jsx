"use client";
import Link from "next/link";


const Button = ({text}) => {
  return (
    <div className="button">
      <Link href="/form">{text}</Link>
    </div>
  );
};

export default Button;
1