import { NextResponse } from "next/server";

export const GET = () => {
  try {
    return NextResponse.json({
      status: 200,
      data:{
        sex:'男性',
        type:'工作'
      }
    });

  } catch (e: unknown) {
    if (e instanceof Error) {
      // 如果 e 是一个 Error 对象，访问其 message 属性
      return NextResponse.json({status: 500, message: e.message});
    } else {
      // 如果 e 不是 Error 类型
      console.error("An unknown error occurred");
    }
  }
}