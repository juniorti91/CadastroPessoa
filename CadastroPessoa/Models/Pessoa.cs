using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CadastroPessoa.Models
{
    [Table("Pessoa")]
    public class Pessoa
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Nome { get; set; }

        [Column(TypeName = "date")]
        public DateTime DataNascimento { get; set; } // 2020-07-26 15:14:54:2323

        [Required]
        [StringLength(1)]
        public string Sexo { get; set; }

        [Required]
        [StringLength(10)]
        public string EstadoCivil { get; set; }

        [Required]
        [StringLength(11)]
        public string CPF { get; set; }

        [Required]
        [StringLength(8)]
        public string CEP { get; set; }

        [Required]
        [StringLength(100)]
        public string Endereco { get; set; }

        [Required]
        [StringLength(10)]
        public string Numero { get; set; }

        [StringLength(30)]
        public string Complemento { get; set; }

        [Required]
        [StringLength(50)]
        public string Bairro { get; set; }

        [Required]
        [StringLength(50)]
        public string Cidade { get; set; }

        [Required]
        [StringLength(2)]
        public string UF { get; set; }
    }
}