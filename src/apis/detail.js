import httpInstance from "@/utils/http";

export const getDeatil = (id)=>{
  return httpInstance({
    url:'goods',
    params: {
      id
    }
  })
}
