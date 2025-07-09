using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ECommerce.Infrastructure;
using ECommerce.Domain;

namespace ECommerce.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly ECommerceDbContext _context;

    public CartController(ECommerceDbContext context)
    {
        _context = context;
    }

    // For demo purposes, using a fixed UserId. In a real app, get this from authentication
    private string UserId => "demo-user";

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CartItem>>> GetCart()
    {
        return await _context.CartItems
            .Include(ci => ci.Product)
            .Where(ci => ci.UserId == UserId)
            .ToListAsync();
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddToCart([FromBody] CartItem item)
    {
        var existing = await _context.CartItems
            .FirstOrDefaultAsync(ci => ci.ProductId == item.ProductId && ci.UserId == UserId);

        if (existing != null)
        {
            existing.Quantity += item.Quantity;
        }
        else
        {
            item.UserId = UserId;
            _context.CartItems.Add(item);
        }

        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpPost("remove")]
    public async Task<IActionResult> RemoveFromCart([FromBody] int cartItemId)
    {
        var item = await _context.CartItems
            .FirstOrDefaultAsync(ci => ci.Id == cartItemId && ci.UserId == UserId);

        if (item == null)
            return NotFound();

        _context.CartItems.Remove(item);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpPost("update")]
    public async Task<IActionResult> UpdateCart([FromBody] CartItem item)
    {
        var existing = await _context.CartItems
            .FirstOrDefaultAsync(ci => ci.Id == item.Id && ci.UserId == UserId);

        if (existing == null)
            return NotFound();

        existing.Quantity = item.Quantity;
        await _context.SaveChangesAsync();
        return Ok();
    }
} 