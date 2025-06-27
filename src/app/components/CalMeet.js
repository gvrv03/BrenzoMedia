"use client";

export default function CalMeet({ style,nameBtn }) {

  return (
    <button
    className={style}
    >
        {nameBtn}
    </button>
  );
}
