using Microsoft.EntityFrameworkCore;
using ECommerce.Domain;

namespace ECommerce.Infrastructure;

public class ECommerceDbContext : DbContext
{
    public ECommerceDbContext(DbContextOptions<ECommerceDbContext> options) : base(options) { }

    public DbSet<Product> Products => Set<Product>();
    public DbSet<CartItem> CartItems => Set<CartItem>();
} 