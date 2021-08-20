using Microsoft.AspNetCore.Http;
using API.Helpers;
using System.Text.Json;

namespace API.Extensions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage, int itemsPerPage, int totalItems, int totalPages){
            var PaginationHeader = new PaginationHeader(currentPage,itemsPerPage,totalItems,totalPages);
            var option = new JsonSerializerOptions{
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };
            response.Headers.Add("Pagination",JsonSerializer.Serialize(PaginationHeader, option));
            response.Headers.Add("Access-Control-Expose-Headers","Pagination");
        }
    }
}