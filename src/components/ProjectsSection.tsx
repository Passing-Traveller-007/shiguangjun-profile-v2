import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Trophy } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: '企业级电商平台',
      role: '全栈开发工程师 / 技术负责人',
      company: '阿里巴巴',
      period: '2022.03 - 2023.08',
      description: '负责构建大型B2B电商平台，服务数万企业用户，日交易额超千万',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      achievements: [
        '系统性能优化，页面加载速度提升60%',
        '设计微服务架构，支持日均100万+请求',
        '建立CI/CD流水线，部署效率提升80%',
        '获得公司年度最佳技术创新奖'
      ],
      metrics: {
        users: '50,000+',
        performance: '+60%',
        revenue: '¥1000万+'
      },
      status: '已上线',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: '智能数据分析平台',
      role: '前端技术负责人',
      company: '字节跳动',
      period: '2021.06 - 2022.02',
      description: '开发企业级数据可视化分析平台，为业务决策提供实时数据洞察',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'MongoDB', 'Kubernetes'],
      achievements: [
        '自主研发图表组件库，复用率达90%',
        '实现实时数据流处理，延迟<100ms',
        '支持千万级数据量可视化展示',
        '帮助业务团队决策效率提升40%'
      ],
      metrics: {
        data: '1000万+',
        charts: '50+',
        efficiency: '+40%'
      },
      status: '已上线',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: '开源组件库项目',
      role: '开源维护者',
      company: '个人项目',
      period: '2020.09 - 至今',
      description: '基于React的企业级UI组件库，专注于提升开发效率和用户体验',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup', 'Lerna'],
      achievements: [
        'GitHub Star数达到5000+',
        'NPM周下载量超过50,000',
        '被300+企业项目采用',
        '建立完善的文档和示例系统'
      ],
      metrics: {
        stars: '5,000+',
        downloads: '50K/week',
        contributors: '30+'
      },
      status: '持续维护',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">项目经历</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            参与和主导的重要项目，展示技术能力和业务价值创造
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="timeline-item">
              <div className="timeline-node"></div>
              
              <Card className="card-glow">
                <CardContent className="p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Project Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-2xl font-bold gradient-text mb-2 sm:mb-0">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {project.period}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-lg font-medium mb-1">{project.role}</p>
                        <p className="text-muted-foreground">{project.company}</p>
                      </div>

                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-medium mb-3">技术栈</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-medium mb-3 flex items-center">
                          <Trophy className="mr-2 h-4 w-4 text-accent" />
                          主要成就
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-accent mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Project Metrics */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-4">项目数据</h4>
                        <div className="space-y-4">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-secondary/30 rounded-lg">
                              <div className="text-2xl font-bold gradient-text mb-1">
                                {value}
                              </div>
                              <div className="text-sm text-muted-foreground capitalize">
                                {key === 'users' && '用户数量'}
                                {key === 'performance' && '性能提升'}
                                {key === 'revenue' && '业务收入'}
                                {key === 'data' && '数据量'}
                                {key === 'charts' && '图表类型'}
                                {key === 'efficiency' && '效率提升'}
                                {key === 'stars' && 'GitHub Stars'}
                                {key === 'downloads' && '周下载量'}
                                {key === 'contributors' && '贡献者'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-sm font-medium text-primary mb-1">项目状态</div>
                        <div className="text-lg font-bold gradient-text">{project.status}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Project Stats Summary */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-sm text-muted-foreground">完成项目</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-sm text-muted-foreground">技术领域</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100K+</div>
            <div className="text-sm text-muted-foreground">影响用户</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">99%</div>
            <div className="text-sm text-muted-foreground">项目成功率</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;