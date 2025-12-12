#!/usr/bin/env python3
"""
Script para fazer upscale de imagens usando Pillow (PIL)
Aumenta a resolução das imagens com filtro Lanczos (alta qualidade)
"""

from PIL import Image
import os

def upscale_image(input_path, output_path, scale_factor=2):
    """
    Faz upscale de uma imagem
    
    Args:
        input_path: Caminho da imagem original
        output_path: Caminho para salvar a imagem upscaled
        scale_factor: Fator de escala (2x, 3x, 4x, etc)
    """
    print(f"Processando: {input_path}")
    
    # Abrir imagem
    img = Image.open(input_path)
    
    # Informações originais
    original_size = img.size
    print(f"  Tamanho original: {original_size[0]}x{original_size[1]}")
    
    # Calcular novo tamanho
    new_size = (original_size[0] * scale_factor, original_size[1] * scale_factor)
    print(f"  Novo tamanho: {new_size[0]}x{new_size[1]}")
    
    # Fazer upscale usando filtro Lanczos (melhor qualidade)
    img_upscaled = img.resize(new_size, Image.Resampling.LANCZOS)
    
    # Salvar com qualidade máxima
    img_upscaled.save(output_path, quality=95, optimize=True)
    
    print(f"  ✓ Salvo: {output_path}\n")

if __name__ == "__main__":
    # Lista de imagens para processar
    images = [
        ("ar-perfil.jpeg", "ar-perfil-hq.jpeg"),
        ("ar-second.jpeg", "ar-second-hq.jpeg")
    ]
    
    # Processar cada imagem com escala 2x
    for input_img, output_img in images:
        if os.path.exists(input_img):
            upscale_image(input_img, output_img, scale_factor=2)
        else:
            print(f"⚠ Arquivo não encontrado: {input_img}")
    
    print("✓ Upscale concluído!")
