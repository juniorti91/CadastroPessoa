using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CadastroPessoa.Models
{
    public class Conexao : DbContext
    {
        // método construtor
        public Conexao() : base("CadastroPessoasDB")
        {

        }

        public DbSet<Pessoa> Pessoas { get; set; }
    }
}