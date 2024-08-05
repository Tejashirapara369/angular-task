import { Component, OnInit } from '@angular/core';
import { DetectingTextService } from './shared/detecting-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // public text = `Elon Musk, a South African-born entrepreneur and innovator, has made significant contributions to the fields of technology and space exploration. Musk is widely regarded as one of the most influential figures in these industries, having founded companies such as SpaceX and Tesla. This essay will explore his impact on the world by analyzing his contributions to these fields.

  // One of Elon Musk's most notable contributions was the founding of SpaceX, a company dedicated to space exploration and transportation. Musk recognized the limitations of government agencies in this field and saw an opportunity to create more efficient and innovative ways to explore space. He faced numerous challenges, including securing funding for his ambitious projects and convincing skeptics that private companies could compete with established government agencies. However, Musk was able to overcome these obstacles through his persistence and determination.
  
  // One of the major challenges that Musk faced in founding SpaceX was securing funding for his projects. The development of rockets and spacecraft requires significant financial resources, which can be difficult to obtain without a proven track record. In order to raise capital, Musk had to convince investors that his company had the potential to disrupt the space industry and generate significant returns. He accomplished this by demonstrating a deep understanding of the market, outlining clear business plans, and showcasing his technical expertise. Additionally, he invested much of his own personal wealth into SpaceX in order to demonstrate his commitment to the project.
  
  // Another challenge that Musk faced was convincing skeptics`;

  constructor(private readonly DetectingTextService: DetectingTextService) {}

  ngOnInit(): void {
    const outputData = this.convertTextToChunks();
    console.log("output", outputData);
  }

  public convertTextToChunks() {
    const text = [
      'p1 Another challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skeptics',

      'p2 challenges that Musk faced in founding SpaceX was securing funding for his projects. The development of rockets and spacecraft requires significant financial resources, which can be difficult to obtain without a proven track record. In order to raise capital, Musk had to convince investors that his company had the potential to disrupt the space industry and generate significant returns. He accomplished this by demonstrating a deep understanding of the market, outlining clear business plans, and showcasing his technical expertise. Additionally, he invested much of his own personal wealth into SpaceX in order to demonstrate his commitment to the project.',

      'p3 Musk is is nj jn jn jn jn jn jn j jn jn widely regarded as one of the most influential figures in these industries, having founded companies such as SpaceX and Tesla. This essay will explore his impact on the world by analyzing his contributions to these fields.', 

      'p4 Elon Musk, a South African-born entrepreneur and innovator, has made significant contributions to the fields of technology and space exploration. Musk is widely regarded as one of the most influential figures in these industries, having founded companies such as SpaceX and Tesla. This essay will explore his impact on the world by analyzing his contributions to these fields.',

      'p5 Another challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticsAnother challenge that Musk faced was convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skepticswas convincing skeptics',
      
      
      "p6 One of Elon Musk's most notable contributions was the founding of SpaceX, a company dedicated to space exploration and transportation. Musk recognized the limitations of government agencies in this field and saw an opportunity to create more efficient and innovative ways to explore space. He faced numerous challenges, including securing funding for his ambitious projects and convincing skeptics that private companies could compete with established government agencies. However, Musk was able to overcome these obstacles through his persistence and determination.",
      
      
      'p7 One of the major challenges that Musk faced in founding SpaceX was securing funding for his projects. The development of rockets and spacecraft requires significant financial resources, which can be difficult to obtain without a proven track record. In order to raise capital, Musk had to convince investors that his company had the potential to disrupt the space industry and generate significant returns. He accomplished this by demonstrating a deep understanding of the market, outlining clear business plans, and showcasing his technical expertise. Additionally, he invested much of his own personal wealth into SpaceX in order to demonstrate his commitment to the project.',

      'p3 is is nj jn jn jn jn jn jn j jn jn widely regarded as one of the most influential figures in these industries, having founded companies such as SpaceX and Tesla. This essay will explore his impact on the world by analyzing his contributions to these', 
      'p3 Musk is is nj jn jn jn jn jn jn j jn jn widely regarded as one of the most influential figures in these industries, having founded companies such as SpaceX and Tesla. This essay will explore his impact on the world by analyzing his contributions to these fields.', 
      'p3 Musk is is nj jn jn jn jdsj asdj  bbb jn jn jn j jn jn widely regarded as one of the most influential figures in these industries, having founded companies such as SpaceX and Tesla. This essay will explore his impact on the world by analyzing fields.', 

      'Another challenge that Musk faced was convincing skeptics',
    ]; 
    const chunks = [];
    let currentChunk = '';
  
    for (let i = 0; i < text.length; i++) {
      const paragraph = text[i];
      const words = paragraph.split(' ');
    
      currentChunk += paragraph + ' ';
  
      if (currentChunk.split(' ').length >= 150) {
        chunks.push(currentChunk.trim());
        console.log(currentChunk.split(' ').length)
        currentChunk = '';
      }
    }
  
    if (currentChunk.trim() !== '') {
      console.log("Going..1")

      chunks.push(currentChunk.trim());
    }
  
    return chunks;
  }

  public detectChucks() {
    const text = ['hi there how are you', 'I am fine'];
    this.DetectingTextService.detectText(text).subscribe((response: any) => {
      console.log(response);
    });
  }

  // muhammad.abdulrehman@youmakr.com
}
