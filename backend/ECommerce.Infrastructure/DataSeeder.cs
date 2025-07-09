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
                Name = "MacBook Pro",
                Description = "Apple M2 Pro chip with 12‑core CPU, 19‑core GPU, 16GB RAM, 1TB SSD.",
                Price = 899.99m,
                ImageUrl = "https://imgs.search.brave.com/m8hBIOT6M9Z7zw32XvQMAqGzQ8IuriXiw5RPMvWEo08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vQXBw/bGUtTWFjQm9vay1Q/cm8tTGFwdG9wLTE2/LTItUmV0aW5hLURp/c3BsYXktd2l0aC1U/b3VjaC1JRC1BcHBs/ZS1NMS1NYXgtMVRC/LVNTRC1tYWNPUy1N/b250ZXJleS1NSzFB/M0xMLUFfZGIxMmRm/MjktODk4Ny00Yjdi/LWFmYjEtZjFiZmRi/MjExZmM0Ljc5ZGM5/OTBkMWZhZTExZTUy/ODBiN2NmNjdkMzc5/ZDA0LmpwZWc_b2Ru/SGVpZ2h0PTU4MCZv/ZG5XaWR0aD01ODAm/b2RuQmc9RkZGRkZG"
            },
            new Product
            {
                Name = "iPhone 15 Pro",
                Description = "6.1-inch display, A17 Pro chip, 128GB, Titanium.",
                Price = 999.99m,
                ImageUrl = "https://imgs.search.brave.com/1dcw36jSnIdQB1wV5N8HP1c9UvV7nQf1CI7dw0P7EVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFjc3RvcmVvbmxp/bmUuY29tLm14L2lt/Zy9jeC9tZWRpYS9h/bGwtcHJvZHVjdHMv/aVBob25lL2lQaG9u/ZV8xNV9Qcm9fTWF4/LnBuZw"
            },
            new Product
            {
                Name = "AirPods Pro (2nd generation)",
                Description = "Active Noise Cancellation, Transparency mode, MagSafe Charging Case.",
                Price = 249.99m,
                ImageUrl = "https://imgs.search.brave.com/uMYM55DOgxnoSqUUJy99WtLQNhH2RQ1I6HqPeAkGdag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFlbENNWHdha0wu/anBn"
            },
            new Product
            {
                Name = "iPad Pro 12.9\"",
                Description = "M2 chip, Liquid Retina XDR display, 256GB, Wi-Fi.",
                Price = 799.99m,
                ImageUrl = "https://imgs.search.brave.com/j4gHmD2dojsF43HvPBOMhqnmmU4_U7lAlIqPuk0REa8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vQXBw/bGUtMTEtaW5jaC1p/UGFkLVByby1XaS1G/aS1UYWJsZXQtMjU2/LUdCLTExLVRhbmRl/bS1PTEVELTI0MjAt/eC0xNjY4LXNpbHZl/cl9kZmZjOTUwZi1i/NGI3LTRkNjktYWNi/Ni01ZTRkNzYzMTQ5/YjguZmY5NWI5YzQw/Nzc1YmNiZjBjNjdi/YTE3ZWYzNWRlYzEu/anBlZz9vZG5IZWln/aHQ9NTgwJm9kbldp/ZHRoPTU4MCZvZG5C/Zz1GRkZGRkY"
            },
            new Product
            {
                Name = "Apple Watch Series 9",
                Description = "45mm Midnight Aluminum Case with Midnight Sport Band.",
                Price = 429.99m,
                ImageUrl = "https://imgs.search.brave.com/gGZw-xhvsHlG1omE77aQS9LxM--GbwXyDYLXHnyu96w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL214/L3dhdGNoL2ltYWdl/cy9vdmVydmlldy9j/b25zaWRlcl9tb2Rh/bHMvc2FmZXR5L21v/ZGFsX3NhZmV0eV9s/b3N0X2FuZF9waW5n/ZWRfX2JmZW9scGQw/aDBjeV94bGFyZ2Uu/anBn"
            },
            new Product
            {
                Name = "Apple Vision Pro",
                Description = "Revolutionary spatial computing device with ultra-high-resolution displays.",
                Price = 3499,
                ImageUrl = "https://imgs.search.brave.com/1OcB_WwstuoELMad8JU4vUnGcDJy2m5G4pHNMyDr3Z4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9haWhv/bWUuY29tLm15L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAz/L0ltYWdlLTgucG5n"
            }
        };

        context.Products.AddRange(products);
        context.SaveChanges();
    }
} 