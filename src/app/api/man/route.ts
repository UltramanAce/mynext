import {NextApiRequest} from 'next';
import {NextResponse} from "next/server";

export const GET = (request: NextApiRequest, context: any) => {
  const {params} = context;

  try {
    return NextResponse.json({
      status: 200,
      data:{
        sex:'男性',
        type:'工作'
      }
    });

  } catch (e: any) {
    return NextResponse.json({status: 500, message: e.message});
  }
}