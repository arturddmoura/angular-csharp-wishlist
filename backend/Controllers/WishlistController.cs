using backend.Controllers.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishlistController : ControllerBase
    {
        private readonly DataContext _context;
        public WishlistController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Item>>> GetWishList()
        {
            return Ok(await _context.Wishlist.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Item>>> CreateWishlistItem(Item item)
        {
            _context.Wishlist.Add(item);
            await _context.SaveChangesAsync();

            return Ok(await _context.Wishlist.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Item>>> UpdateWishlistItem(Item item)
        {
            var dbItem = await _context.Wishlist.FindAsync(item.Id);
            if (dbItem == null) 
            {
                return BadRequest("Item not found.");
            }

            dbItem.Image = item.Image;
            dbItem.Description = item.Description;
            dbItem.Name = item.Name;
            dbItem.Price = item.Price;
            dbItem.Quantity = item.Quantity;

            await _context.SaveChangesAsync();

            return Ok(await _context.Wishlist.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Item>>> DeleteWishlistItem(Guid id)
        {
            var dbItem = await _context.Wishlist.FindAsync(id);
            if (dbItem == null)
            {
                return BadRequest("Item not found.");
            }

            _context.Wishlist.Remove(dbItem);
            await _context.SaveChangesAsync();

            return Ok(await _context.Wishlist.ToListAsync());
        }

    }
}
