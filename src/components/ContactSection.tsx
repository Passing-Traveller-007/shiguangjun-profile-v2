import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">联系方式</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            期待与您探讨合作机会，共同创造优秀的数字产品
          </p>
        </div>

        <div className="max-w-lg mx-auto">{/* Contact Information */}
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">联系信息</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">邮箱</div>
                    <div className="text-muted-foreground">xxxxx@163.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">电话</div>
                    <div className="text-muted-foreground">010-xxxxxxxx</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">位置</div>
                    <div className="text-muted-foreground">北京市朝阳区</div>
                  </div>
                </div>
              </div>
        </div>


            {/* Quick Stats */}
            <Card className="card-glow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">响应时间</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">24h</div>
                    <div className="text-sm text-muted-foreground">邮件回复</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">即时</div>
                    <div className="text-sm text-muted-foreground">在线沟通</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">工作时间</h3>
            <p className="text-muted-foreground mb-8">
              周一至周五 9:00-18:00 (GMT+8) | 周末紧急情况可联系
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-4 card-glow">
                <div className="font-medium mb-2">合作咨询</div>
                <div className="text-sm text-muted-foreground">
                  项目合作、技术顾问、团队支持
                </div>
              </Card>
              
              <Card className="p-4 card-glow">
                <div className="font-medium mb-2">技术交流</div>
                <div className="text-sm text-muted-foreground">
                  技术分享、架构讨论、开源协作
                </div>
              </Card>
              
              <Card className="p-4 card-glow">
                <div className="font-medium mb-2">招聘机会</div>
                <div className="text-sm text-muted-foreground">
                  全职、兼职、远程工作机会
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;