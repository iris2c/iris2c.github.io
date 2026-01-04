import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Publications.css'

function Publications() {
  const { language } = useLanguage()
  const t = translations[language]
  const publications = [
    // 2025 Conference
    {
      id: 1,
      title: "InspireMusic: Integrating Super Resolution and Large Language Model for High-Fidelity Long-Form Music Generation",
      authors: "Chong Zhang*, Yukun Ma*, Qian Chen, Wen Wang, Shengkui Zhao, Zexu Pan, Hao Wang, Chongjia Ni, Trung Hieu Nguyen, Kun Zhou, Yidi Jiang, Chaohong Tan, Zhifu Gao, Zhihao Du, Bin Ma",
      venue: "2025 Technical Report",
      link: "#",
      year: "2025",
      type: "conference"
    },
    {
      id: 2,
      title: "Minmo: A multimodal large language model for seamless voice interaction",
      authors: "Qian Chen, Yafeng Chen, Yanni Chen, Mengzhe Chen, Yingda Chen, Chong Deng, Zhihao Du, Ruize Gao, Changfeng Gao, Zhifu Gao, Yabin Li, Xiang Lv, Jiaqing Liu, Haoneng Luo, Bin Ma, Chongjia Ni, Xian Shi, Jialong Tang, Hui Wang, Hao Wang, Wen Wang, Yuxuan Wang, Yunlan Xu, Fan Yu, Zhijie Yan, Yexin Yang, Baosong Yang, Xian Yang, Guanrou Yang, Tianyu Zhao, Qinglin Zhang, Shiliang Zhang, Nan Zhao, Pei Zhang, Chong Zhang, Jinren Zhou",
      venue: "Technical Report, arXiv preprint arXiv:2501.06282, 2025",
      link: "#",
      year: "2025",
      type: "conference"
    },
    {
      id: 3,
      title: "UniCodec: Unified Audio Codec with Single Domain-Adaptive Codebook",
      authors: "Yidi Jiang, Qian Chen, Shengpeng Ji, Yu Xi, Wen Wang, Chong Zhang, Xianghu Yue, ShiLiang Zhang, Haizhou Li",
      venue: "ACL 2025 Main",
      link: "#",
      year: "2025",
      type: "conference"
    },
    {
      id: 4,
      title: "Plug-and-Play Co-Occurring Face Attention for Robust Audio-Visual Speaker Extraction",
      authors: "Zexu Pan, Shengkui Zhao, Tingting Wang, Kun Zhou, Yukun Ma, Chong Zhang, Bin Ma",
      venue: "Proc. INTERSPEECH 2025",
      link: "#",
      year: "2025",
      type: "conference"
    },
    {
      id: 5,
      title: "Online Audio-Visual Autoregressive Speaker Extraction",
      authors: "Zexu Pan, Wupeng Wang, Shengkui Zhao, Chong Zhang, Kun Zhou, Yukun Ma, Bin Ma",
      venue: "Proc. INTERSPEECH 2025",
      link: "#",
      year: "2025",
      type: "conference"
    },
    {
      id: 6,
      title: "Conditional Latent Diffusion-Based Speech Enhancement Via Dual Context Learning",
      authors: "Shengkui Zhao, Zexu Pan, Kun Zhou, Yukun Ma, Chong Zhang, Bin Ma",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025",
      link: "#",
      year: "2025",
      type: "conference"
    },
    {
      id: 7,
      title: "HiFi-SR: A Unified Generative Transformer-Convolutional Adversarial Network for High-Fidelity Speech Super-Resolution",
      authors: "Shengkui Zhao, Kun Zhou, Zexu Pan, Yukun Ma, Chong Zhang, Bin Ma",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025",
      link: "#",
      year: "2025",
      type: "conference"
    },
    // 2024 Conference
    {
      id: 8,
      title: "Phonetic Enhanced Language Modeling for Text-to-Speech Synthesis",
      authors: "Kun Zhou, Shengkui Zhao, Yukun Ma, Chong Zhang, Hao Wang, Dianwen Ng, Chongjia Ni, Nguyen Trung Hieu, Jia Qi Yip, Bin Ma",
      venue: "Proc. INTERSPEECH 2024",
      link: "#",
      year: "2024",
      type: "conference"
    },
    {
      id: 9,
      title: "Are Soft Prompts Good Zero-shot Learners for Speech Recognition?",
      authors: "Dianwen Ng, Chong Zhang, Ruixi Zhang, Yukun Ma, Fabian Ritter-Gutierrez, Trung Hieu Nguyen, Chongjia Ni, Shengkui Zhao, Eng Siong Chng, Bin Ma",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2024",
      link: "#",
      year: "2024",
      type: "conference"
    },
    {
      id: 10,
      title: "Loss Masking Is Not Needed in Decoder-only Transformer for Discrete-token Based ASR",
      authors: "Qian Chen, Wen Wang, Qinglin Zhang, Siqi Zheng, Shiliang Zhang, Chong Deng, Yukun Ma, Hai Yu, Jiaqing Liu, Chong Zhang",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2024",
      link: "#",
      year: "2024",
      type: "conference"
    },
    {
      id: 11,
      title: "MOSSFORMER2: Combining Transformer and RNN-Free Recurrent Network for Enhanced Time-domain Monaural Speech Separation",
      authors: "Shengkui Zhao, Yukun Ma, Chongjia Ni, Chong Zhang, Hao Wang, Trung Hieu Nguyen, Kun Zhou, Jia Qi Yip, Dianwen Ng, Bin Ma",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2024",
      link: "#",
      year: "2024",
      type: "conference"
    },
    {
      id: 12,
      title: "SPGM: Prioritizing Local Features for Enhanced Speech Separation Performance",
      authors: "Jia Qi Yip, Shengkui Zhao, Yukun Ma, Chongjia Ni, Chong Zhang, Hao Wang, Trung Hieu Nguyen, Kun Zhou, Dianwen Ng, Eng Siong Chng, Bin Ma",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2024",
      link: "#",
      year: "2024",
      type: "conference"
    },
    // 2023 Conference
    {
      id: 13,
      title: "Ditto: A Simple and Efficient Approach to Improve Sentence Embeddings",
      authors: "Qian Chen, Wen Wang, Qinglin Zhang, Siqi Zheng, Chong Deng, Hai Yu, Jiaqing Liu, Yukun Ma, Chong Zhang",
      venue: "The 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP), 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    {
      id: 14,
      title: "Adapter-tuning with Effective Token-dependent Representation Shift for Automatic Speech Recognition",
      authors: "Dianwen Ng, Chong Zhang, Ruixi Zhang, Yukun Ma, Trung Hieu Nguyen, Chongjia Ni, Shengkui Zhao, Qian Chen, Wen Wang, Eng Siong Chng, Bin Ma",
      venue: "Proc. INTERSPEECH 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    {
      id: 15,
      title: "ACA-Net: Towards Lightweight Speaker Verification using Asymmetric Cross Attention",
      authors: "Jia Qi Yip, Tuan Truong, Dianwen Ng, Chong Zhang, Yukun Ma, Trung Hieu Nguyen, Chongjia Ni, Shengkui Zhao, Eng Siong Chng, Bin Ma",
      venue: "Proc. INTERSPEECH 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    {
      id: 16,
      title: "Dual Acoustic Linguistic Self-supervised Representation Learning for Cross-Domain Speech Recognition",
      authors: "Zhao Yang, Dianwen Ng, Chong Zhang, Xiao Fu, Rui Jiang, Wei Xi, Yukun Ma, Chongjia Ni, Eng Siong Chng, Bin Ma, Jizhong Zhao",
      venue: "Proc. INTERSPEECH 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    {
      id: 17,
      title: "A Unified Recognition and Correction Model under Noisy and Accent Speech Conditions",
      authors: "Zhao Yang, Dianwen Ng, Chong Zhang, Rui Jiang, Wei Xi, Yukun Ma, Chongjia Ni, Jizhong Zhao, Bin Ma, Eng Siong Chng",
      venue: "Proc. INTERSPEECH 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    {
      id: 18,
      title: "Dual-Memory Multi-Modal Learning for Continual Spoken Keyword Spotting with Confidence Selection and Diversity Enhancement",
      authors: "Zhao Yang, Dianwen Ng, Xizhe Li, Chong Zhang, Rui Jiang, Wei Xi, Yukun Ma, Chongjia Ni, Jizhong Zhao, Bin Ma, Eng Siong Chng",
      venue: "Proc. INTERSPEECH 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    {
      id: 19,
      title: "deHuBERT: Disentangling Noise In A Self-Supervised Model For Robust Speech Recognition",
      authors: "Dianwen Ng, Ruixi Zhang, Jia Qi Yip, Zhao Yang, Jinjie Ni, Chong Zhang, Yukun Ma, Chongjia Ni, Eng Siong Chng and Bin Ma",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    {
      id: 20,
      title: "Contrastive Speech Mixup For Low-Resource Keyword Spotting",
      authors: "Dianwen Ng, Ruixi Zhang, Jia Qi Yip, Chong Zhang, Yukun Ma, Trung Hieu Nguyen, Chongjia Ni, Eng Siong Chng and Bin Ma",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    {
      id: 21,
      title: "Auxiliary Pooling Layer For Spoken Language Understanding",
      authors: "Yukun Ma, Trung Hieu Nguyen, Jinjie Ni, Wen Wang, Qian Chen, Chong Zhang and Bin Ma",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    {
      id: 22,
      title: "Adaptive Knowledge Distillation Between Text And Speech Pre-Trained Models",
      authors: "Jinjie Ni, Yukun Ma, Wen Wang, Qian Chen, Dianwen Ng, Han Lei, Trung Hieu Nguyen, Chong Zhang and Bin Ma",
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023",
      link: "#",
      year: "2023",
      type: "conference"
    },
    // 2022 Conference
    {
      id: 23,
      title: "I2CR: Improving Noise Robustness on Keyword Spotting Using Inter-Intra Contrastive Regularization",
      authors: "Dianwen Ng, Jia Qi Yip, Tanmay Surana, Zhao Yang, Chong Zhang, Yukun Ma, Chongjia Ni, Eng Siong Chng, and Bin Ma",
      venue: "2022 Asia Pacific Signal and Information Processing Association (APSIPA) Annual Summit and Conference, 2022",
      link: "#",
      year: "2022",
      type: "conference"
    },
    // 2018 Conference
    {
      id: 24,
      title: "Gated Recurrent Units Based Neural Network For Tool Condition Monitoring",
      authors: "H. Xu, C. Zhang, G. S. Hong, J. H. Zhou, J. Hong and K. S. Woon",
      venue: "2018 International Joint Conference on Neural Networks (IJCNN), pp. 1-7, July, 2018",
      link: "#",
      year: "2018",
      type: "conference"
    },
    // 2017 Conference
    {
      id: 25,
      title: "Tool condition monitoring in deep hole gun drilling: a data-driven approach",
      authors: "J. Hong, J. H. Zhou, H. L. Chan, C. Zhang, H. Xu, and G. S. Hong",
      venue: "IEEE Conference on Industrial Engineering and Engineering Management (IEEM), Best paper finalist, Dec 2017",
      link: "#",
      year: "2017",
      type: "conference"
    },
    {
      id: 26,
      title: "A data-driven prognostics framework for tool remaining useful life estimation in tool condition monitoring",
      authors: "C. Zhang, G. S. Hong, H. Xu, K. C. Tan, J. H. Zhou, H. L. Chan, and H. Li",
      venue: "2017 22nd IEEE International Conference on Emerging Technologies and Factory Automation (ETFA), pp. 1–8, Sept 2017",
      link: "#",
      year: "2017",
      type: "conference"
    },
    // 2016 Conference
    {
      id: 27,
      title: "Training cost-sensitive deep belief networks on imbalance data problems",
      authors: "C. Zhang, K. C. Tan, and R. Ren",
      venue: "2016 International Joint Conference on Neural Networks (IJCNN), pp. 4362–4367, July 2016",
      link: "#",
      year: "2016",
      type: "conference"
    },
    // 2015 Conference
    {
      id: 28,
      title: "Deep belief networks ensemble with multi-objective optimization for failure diagnosis",
      authors: "C. Zhang, J. H. Sun, and K. C. Tan",
      venue: "2015 IEEE International Conference on Systems, Man, and Cybernetics (SMC), pp. 32–37, Oct 2015",
      link: "#",
      year: "2015",
      type: "conference"
    },
    // Journal
    {
      id: 29,
      title: "MDSF-YOLO: Advancing object detection with a multiscale dilated sequence fusion network",
      authors: "Y. Sun, C. Zhang, X. Li, X. Jing, H. Kong, Q. G. Wang",
      venue: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS), 2025",
      link: "#",
      year: "2025",
      type: "journal"
    },
    {
        id: 30,
        title: "Tuning Large Language Models for Speech Recognition with Mixed-Scale Re-Tokenization",
        authors: "Y. Ma*, C. Zhang*, Q. Chen, W. Wang and B. Ma",
        venue: "IEEE Signal Processing Letters, vol. 31, pp. 1740-1744, 2024, doi: 10.1109/LSP.2024.3419719",
        link: "#",
        year: "2024",
        type: "journal"
      },
    {
      id: 31,
      title: "A Cost-Sensitive Deep Belief Network for Imbalanced Classification",
      authors: "C. Zhang, K. C. Tan, H. Li, and G. S. Hong",
      venue: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS), vol. 30, no. 1, pp. 109-122, Jan. 2019",
      link: "#",
      year: "2019",
      type: "journal"
    },
    {
      id: 32,
      title: "Multiobjective Deep Belief Networks Ensemble for Remaining Useful Life Estimation in Prognostics",
      authors: "C. Zhang, P. Lim, A. K. Qin, and K. C. Tan",
      venue: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS), vol. 28, pp. 2306–2318, Oct 2017",
      link: "#",
      year: "2017",
      type: "journal"
    }
  ]

  const conferencePubs = publications.filter(pub => pub.type === 'conference')
  const journalPubs = publications.filter(pub => pub.type === 'journal')

  return (
    <section id="publications" className="section publications">
      <div className="section-content">
        <h2 className="section-title">{t.publications.title}</h2>
        
        <h3 className="publication-category">{t.publications.conference}</h3>
        <div className="publications-list">
          {conferencePubs.map((pub) => (
            <div key={pub.id} className="publication-item">
              <div className="publication-year">{pub.year}</div>
              <div className="publication-content">
                <h3 className="publication-title">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h3>
                <p className="publication-authors">{pub.authors}</p>
                <p className="publication-venue">{pub.venue}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="publication-category">{t.publications.journal}</h3>
        <div className="publications-list">
          {journalPubs.map((pub) => (
            <div key={pub.id} className="publication-item">
              <div className="publication-year">{pub.year}</div>
              <div className="publication-content">
                <h3 className="publication-title">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h3>
                <p className="publication-authors">{pub.authors}</p>
                <p className="publication-venue">{pub.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications

