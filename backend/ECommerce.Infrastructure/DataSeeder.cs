using ECommerce.Domain;

namespace ECommerce.Infrastructure;

public static class DataSeeder
{
    public static void SeedProducts(ECommerceDbContext context)
    {
        if (context.Products.Any())
            return;

        var products = new List<Product>
        {
            new Product
            {
                Name = "Laptop",
                Description = "High-performance laptop for work and gaming",
                Price = 999.99m,
                ImageUrl = "https://via.placeholder.com/300x200?text=Laptop"
            },
            new Product
            {
                Name = "Smartphone",
                Description = "Latest smartphone with advanced features",
                Price = 699.99m,
                ImageUrl = "https://via.placeholder.com/300x200?text=Smartphone"
            },
            new Product
            {
                Name = "Headphones",
                Description = "Wireless noise-canceling headphones",
                Price = 199.99m,
                ImageUrl = "https://via.placeholder.com/300x200?text=Headphones"
            },
            new Product
            {
                Name = "Tablet",
                Description = "10-inch tablet perfect for entertainment",
                Price = 399.99m,
                ImageUrl = "https://via.placeholder.com/300x200?text=Tablet"
            },
            new Product
            {
                Name = "Smartwatch",
                Description = "Fitness tracking smartwatch",
                Price = 299.99m,
                ImageUrl = "https://via.placeholder.com/300x200?text=Smartwatch"
            }
        };

        context.Products.AddRange(products);
        context.SaveChanges();
    }
} 