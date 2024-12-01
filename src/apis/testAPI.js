import httpInstance from "@/utils/http";

export function getCategory(){
  return httpInstance({
    URL: 'home/category/head'
  })
}
